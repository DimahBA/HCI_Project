import Button from "../components/Button";
const HelpPage = () => {
  const handleCallWaiter = () => {
    document.getElementById('waiterModal').style.visibility = 'visible';
  };

  const handleCloseModal = () => {
    document.getElementById('waiterModal').style.visibility = 'hidden';
  };
  return (
    <>

      <div className="flex-col items-center p-6 text-dark">
        <div className="flex-col items-center">
          <h1 className="text-3xl font-bold text-center mb-2">Help</h1>

          <div className="flex-col gap-6 mb-4 w-full max-w-3xl">  
            <div className="text-2xl font-semibold text-center mb-3">How this website works:</div>
            On the bottom bar, you will find three sections: Menu, Set Menus, and Cart. <br />

            <div className="mt-2 mb-2">
              <strong className="inline text-xl">Menu:</strong>
              <p>This is where you can browse all the available dishes and drink options. You can filter the items by categories like Vegetarian, Vegan, or Gluten-Free.</p>
            </div>

            <div className="mb-2">
              <strong className="inline text-xl">Set Menus:</strong>
              <p>This is where you can find pre-configured meal sets that combine multiple items.</p>
            </div>

            <div className="mb-2">
              <strong className="inline text-xl">Cart:</strong>
              <p>This is where you can view all the items you've selected, order and check the time remaining for your order, and proceed to payment.</p>
            </div>

            <div>
              <p>Located at the top right of the screen, you can find the Help button for assistance, or adjust your preferences under Settings.</p>
            </div>
          </div>

          <div className="mt-4 flex justify-center w-full">
            <Button className="px-6 py-2 w-auto" onClick={handleCallWaiter}>Call a waiter for help</Button>
          </div>
        </div>

        <div
          id="waiterModal"
          className="fixed top-0 left-0 right-0 w-full h-screen  flex justify-center items-center z-50 text-light"
          style={{ visibility: 'hidden' }}
        >
      <div className="bg-red p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold text-center mb-4">The waiter is coming!</h2>
        <p className="text-center mb-6">Your request has been received, and a waiter will assist you shortly.</p>
        <div className="text-center">
          <button className="bg-light text-lg text-red px-6 py-2 rounded-4xl" onClick={handleCloseModal}>Close</button>
        </div>
      </div>
</div>





      </div>

    </>
  );
};

export default HelpPage;
