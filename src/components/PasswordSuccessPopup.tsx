import { useEffect, useState } from "react";

function PasswordSuccessPopup() {

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-400 text-white p-4">
          <p>Cadastro Realizado com sucesso.</p>
        </div>
      )}
    </>
  );
}

export default PasswordSuccessPopup;