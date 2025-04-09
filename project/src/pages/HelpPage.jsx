import Button from "../components/Button";
const HelpPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-6 mt-14 text-dark">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-5">Help</h1>

          <div className="flex flex-col gap-4 mb-4">
            <div className="text-2xl text-center">How this website works: </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
            amet lorem eu dui scelerisque blandit non eu diam. Curabitur odio
            leo, molestie sed efficitur ac, pulvinar vel ex. Pellentesque
            vehicula sem enim, dapibus laoreet velit congue in. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Phasellus tristique congue est, ut elementum massa
            tincidunt in. Vestibulum lacinia suscipit sapien, ac tincidunt risus
            faucibus ut. Donec porttitor pharetra dui eu finibus.
          </div>
          <Button>Call a waiter for help</Button>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
