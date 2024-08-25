
import React, { useState } from 'react';
import jsQR from 'jsqr';
import Quagga from 'quagga';
import axios from 'axios';
import { FcAddImage } from "react-icons/fc";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Extract = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [medicineDetails, setMedicineDetails] = useState(null);
  const [isFake, setIsFake] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [barcode, setBarcode] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (selectedImage) {
      setLoading(true);

      // Perform QR code scanning using jsQR
      const image = new Image();
      image.src = selectedImage;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const qrCodeResult = jsQR(imageData.data, imageData.width, imageData.height);
        if (qrCodeResult) {
          setQrCode(qrCodeResult.data);
        }

        Quagga.decodeSingle({
          src: selectedImage,
          numOfWorkers: 0,
          inputStream: {
            size: 800,
          },
          decoder: {
            readers: ["code_128_reader", "ean_reader"],
          },
        }, (result) => {
          if (result && result.codeResult) {
            setBarcode(result.codeResult.code);
          }
          setLoading(false);
        });
      };
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    setIsFake(false);

    try {
      const response = await axios.post('http://localhost:4000/api/company/scan', {
        companyName,
        medicineName,
        batchNumber
      });

      if (response.data) {
        setMedicineDetails(response.data);
        setIsFake(false);
      } else {
        setIsFake(true);
      }
    } catch (error) {
      console.error('Error searching medicine:', error);
      setIsFake(true);
    } finally {
      setLoading(false);
    }
  };

  const discardHandler = () => {
    setSelectedImage(null);
    setCompanyName('');
    setMedicineName('');
    setBatchNumber('');
    setMedicineDetails(null);
    setIsFake(false);
    setQrCode('');
    setBarcode('');
  };

  return (
    <div className='flex bg-black min-h-screen items-center justify-center'>
      <div className='w-[50%] max-w-[500px] mx-auto p-4 text-slate-300 border rounded shadow-lg bg-zinc-900'>
        <h2 className="text-2xl font-bold mb-4">Extract QR and Barcode from Image</h2>
        <div className="mb-4 bg-zinc-800">
          <label htmlFor="file-upload" className="block mb-2 cursor-pointer text-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="w-full h-48 object-cover rounded" />
            ) : (
              <div className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded cursor-pointer">
                <FcAddImage className="text-6xl" />
              </div>
            )}
            <input type="file" accept="image/*" id="file-upload" className="hidden" onChange={handleFileInputChange} />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Medicine Name</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Batch Number</label>
          <input
            type="text"
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="profile-btn flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={discardHandler}
          >
            Discard
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Extract Information'}
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search Medicine'}
          </button>
        </div>

        {loading && <div className="mt-4 text-center">Processing...</div>}

        {qrCode && (
          <div className="mt-6 p-4 bg-gray-100 text-gray-800 rounded">
            <h2 className="text-lg font-semibold">QR Code Result:</h2>
            <p className="mt-2">{qrCode}</p>
          </div>
        )}

        {barcode && (
          <div className="mt-6 p-4 bg-gray-100 text-gray-800 rounded">
            <h2 className="text-lg font-semibold">Barcode Result:</h2>
            <p className="mt-2">{barcode}</p>
          </div>
        )}

        {medicineDetails && !isFake && (
          <div className="mt-6 p-4 bg-gray-100 text-gray-800 rounded">
            <h2 className="text-lg font-semibold flex items-center">
              <FaThumbsUp className="text-green-500 mr-2" /> Medicine Authenticated
            </h2>
            <p><strong>Name:</strong> {medicineDetails.name}</p>
            <p><strong>Salts:</strong> {medicineDetails.salts}</p>
            <p><strong>Description:</strong> {medicineDetails.description}</p>
          </div>
        )}

        {isFake && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded">
            <h2 className="text-lg font-semibold flex items-center">
              <FaThumbsDown className="text-red-500 mr-2" /> Warning: Fake Medicine Detected
            </h2>
            <p>The medicine you are trying to authenticate could not be found in our records.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Extract;
