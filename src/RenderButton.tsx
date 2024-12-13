import React, { FC, Dispatch, SetStateAction } from "react";
import Button from "./components/Button.tsx";

interface RenderButtonProps {
  setMarkdownText: Dispatch<SetStateAction<string>>;
  markdownText: string;
}

const RenderButton: FC<RenderButtonProps> = ({
  setMarkdownText,
  markdownText,
}) => {
  const handleRender = () => {
    setMarkdownText(markdownText);
  };

  return (
    <Button onClick={handleRender} variant="outlined" color="secondary">
      Render
    </Button>
  );
};

export default RenderButton;
