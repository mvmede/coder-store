import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import logo from "../components/assets/logo.png";

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (loading) {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setCurrentItem(index);
        if (index >= cart.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 500);
    }
  }, [loading, cart.length]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinalize = () => {
    clearCart();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl mb-4">
          Carregando seus produtos finais {currentItem}/{cart.length}
        </div>
        <div className="w-3/4 max-w-lg">
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div
              style={{ width: `${(currentItem / cart.length) * 100}%` }}
              className="h-full bg-teal-600 rounded-full transition-width duration-300"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl mb-4">
          Carregando seus produtos finais {currentItem}/{cart.length}
        </div>
        <div className="w-3/4 max-w-lg">
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div
              style={{ width: `${(currentItem / cart.length) * 100}%` }}
              className="h-full bg-teal-600 rounded-full transition-width duration-300"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 pt-24 min-h-screen p-4">
      <h1 className="text-2xl pb-8 text-center font-bold">Checkout</h1>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg p-8 text-center shadow-lg w-80">
            <img src={logo} alt="Logo" className="w-auto mx-auto mb-4" />
            <p className="text-lg text-white font-semibold">
              Compra realizada com sucesso!
            </p>
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          {/* Passo-a-passo */}

          <div className="flex justify-center">
            <div className="bg-gray-600 rounded-full py-4 mb-6">
              <h1 className="text-2xl text-white px-12 font-bold text-center">
                PASSO 1 / 3
              </h1>
            </div>
          </div>
          <div className="flex items-center my-8 justify-center">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
            <h2 className="text-xl items-center flex pl-2 font-semibold text-center ">
              Verifique seus itens{" "}
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <h2 className="text-xl items-center text-gray-400 flex pl-2 font-semibold text-center ">
              Dados Pessoais
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <h2 className="text-xl items-center text-gray-400 flex pl-2 font-semibold text-center ">
              Pagamento
            </h2>
          </div>

          {/* Passo-a-passo */}

          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between p-4 bg-white mb-4 rounded"
              >
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: R${(item.price ?? 0).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-center">
            Total: R${total.toFixed(2)}
          </p>
        </div>
      )}
      {step === 2 && (
        <div>
          {/* Passo-a-passo */}

          <div className="flex justify-center">
            <div className="bg-gray-600 rounded-full py-4 mb-6">
              <h1 className="text-2xl text-white px-12 font-bold text-center">
                PASSO 2 / 3
              </h1>
            </div>
          </div>
          <div className="flex items-center my-8 justify-center">
            <h2 className="text-xl items-center text-gray-400 flex pl-2 font-semibold text-center ">
              Verifique seus itens{" "}
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
            <h2 className="text-xl items-center  flex pl-2 font-semibold text-center ">
              Dados Pessoais
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <h2 className="text-xl items-center text-gray-400 flex pl-2 font-semibold text-center ">
              Pagamento
            </h2>
          </div>

          {/* Passo-a-passo */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Nome</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={personalData.name}
                onChange={(e) =>
                  setPersonalData({ ...personalData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={personalData.email}
                onChange={(e) =>
                  setPersonalData({ ...personalData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Telefone</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={personalData.phone}
                onChange={(e) =>
                  setPersonalData({ ...personalData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">CEP</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={personalData.cep}
                onChange={(e) =>
                  setPersonalData({ ...personalData, cep: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Endereço</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={personalData.address}
                onChange={(e) =>
                  setPersonalData({ ...personalData, address: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Data de Nascimento</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={personalData.birthDate}
                onChange={(e) =>
                  setPersonalData({
                    ...personalData,
                    birthDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">CPF</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={personalData.cpf}
                onChange={(e) =>
                  setPersonalData({ ...personalData, cpf: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          {/* Passo-a-passo */}

          <div className="flex justify-center">
            <div className="bg-gray-600 rounded-full py-4 mb-6">
              <h1 className="text-2xl text-white px-12 font-bold text-center">
                PASSO 3 / 3
              </h1>
            </div>
          </div>
          <div className="flex items-center my-8 justify-center">
            <h2 className="text-xl items-center text-gray-400 flex pl-2 font-semibold text-center ">
              Verifique seus itens{" "}
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <h2 className="text-xl items-center text-gray-400  flex pl-2 font-semibold text-center ">
              Dados Pessoais
              <div className="border-2 w-24 mx-4 items-center rounded-full border-gray-300 my-4" />
            </h2>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
            <h2 className="text-xl items-center  flex pl-2 font-semibold text-center ">
              Pagamento
            </h2>
          </div>

          {/* Passo-a-passo */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Número do Cartão</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Data de Validade</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={paymentData.expiryDate}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    expiryDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">CVV</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={paymentData.cvv}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, cvv: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">
                Nome impresso no cartão
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={paymentData.cardName}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">
                CPF do dono do cartão
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={paymentData.cardCpf}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardCpf: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>
      )}
      <div className="mt-6 gap-8 flex items-center justify-center ">
        {step > 1 && (
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={handlePreviousStep}
          >
            Voltar
          </button>
        )}
        {step < 3 ? (
          <button
            className="bg-blue-500  flex justify-center items-center text-white py-2 px-44 rounded"
            onClick={handleNextStep}
          >
            Próximo
          </button>
        ) : (
          <button
            className="bg-green-500  text-white py-2 px-4 rounded"
            onClick={handleFinalize}
          >
            Finalizar Compra
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
