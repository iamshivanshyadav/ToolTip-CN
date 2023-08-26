
import ToolTip from "../components/ToolTip";
import { MuiTooltip } from "../components/MuiTooltip"; // Make sure you're importing MuiTooltip correctly

import { UilGithubAlt,UilLinkedinAlt,UilTwitterAlt, UilBagAlt } from '@iconscout/react-unicons';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-4xl my-6">ToolTip</h1>
      <div className="flex justify-center items-center">
        ToolTip using Functional Component
      </div>
      <div className="mx-auto max-w-3xl p-10 flex justify-center items-center">
        <ToolTip tooltip="I am tooltip">
          <button className="bg-gray-900 text-white p-3 rounded">
            Show Me Tooltip
          </button>
        </ToolTip>
      </div>
      <div className="flex justify-center items-center">
        ToolTip using material UI
      </div>
      <div className="flex justify-center items-center">
        <MuiTooltip />
      </div>
      <footer className="py-4 bg-gray-900 absolute bottom-0 w-full">
        <h2 className="text-center text-xl font-bold text-gray-400 mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/iamshivanshyadav" target="_blank" rel="noopener noreferrer">
            <UilGithubAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshyadav27/" target="_blank" rel="noopener noreferrer">
            <UilLinkedinAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://twitter.com/shivaayshivansh" target="_blank" rel="noopener noreferrer">
            <UilTwitterAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://shivaay-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <UilBagAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
        </div>
        <p className="text-center mt-2 text-sm text-gray-400">
          Developed by Shivansh Yadav
        </p>
      </footer>
    </div>
  );
}

export default App;
