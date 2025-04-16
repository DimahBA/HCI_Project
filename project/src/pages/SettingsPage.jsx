import { useDispatch, useSelector } from "react-redux";
import Toggle from "../components/Toggle";
import {
  toggleContrast,
  toggleBigFont,
  toggleSimpleMode,
  toggleDarkMode,
} from "../slices/accessibilitySlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { contrast, bigFont, simpleMode, darkMode } = useSelector(
    (state) => state.accessibility
  );
  console.log("SettingsPage", contrast, bigFont, simpleMode, darkMode);

  return (
    <>
      <div className="flex flex-col items-center p-6 mt-20 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center mt-8 font-title text-dark">Settings</h1>
          <span className="w-full border-t rounded border-1 border-light-dark my-8"></span>

          <div className="flex flex-col gap-4">
            {/* <Toggle checked={checked} label="More Contrast" />
            <Toggle label="Bigger Font" />
            <Toggle label="Text-to-Speech" />
            <Toggle label="Simple Mode" /> */}
            <Toggle
              label="More Contrast"
              checked={contrast}
              onChange={() => dispatch(toggleContrast())}
            />
            <Toggle
              label="Bigger Font"
              checked={bigFont}
              onChange={() => dispatch(toggleBigFont())}
            />
            <Toggle
              label="Simple Mode"
              checked={simpleMode}
              onChange={() => dispatch(toggleSimpleMode())}
            />
            <Toggle
              label="Dark Mode"
              checked={darkMode}
              onChange={() => dispatch(toggleDarkMode())}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
