import React, { FC, Dispatch, SetStateAction } from "react";
import Button from "./components/Button.tsx";

interface RenderButtonProps {
  setRenderedText: Dispatch<SetStateAction<string>>;
  markdownText: string;
}

const RenderButton: FC<RenderButtonProps> = ({
  setRenderedText,
  markdownText,
}) => {
  const handleRender = () => {
    setRenderedText(markdownText);
  };

  return (
    <Button onClick={handleRender} variant="outlined" color="secondary">
      Render
    </Button>
  );
};

export default RenderButton;
