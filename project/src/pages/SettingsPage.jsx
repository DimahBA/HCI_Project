import Toggle from "../components/Toggle";

const SettingsPage = () => {

  return (
    <>
      <div className="flex flex-col items-center p-6 mt-20 ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-10">Settings</h1>

          <div className="flex flex-col gap-4">
            <Toggle name="More Contrast" />
            <Toggle name="Bigger Font" />
            <Toggle name="Text-to-Speech" />
            <Toggle name="Simple Mode" />
          </div>
        </div>
      </div>


    </>
  );
};

export default SettingsPage;
