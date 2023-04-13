import { useEffect, useState } from "react";

function PasswordErrorPopup() {

  const [showPopup, setShowPopup] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4">
          <p>A senha informada não é compatível.</p>
        </div>
      )}
    </>
  );
}

export default PasswordErrorPopup;