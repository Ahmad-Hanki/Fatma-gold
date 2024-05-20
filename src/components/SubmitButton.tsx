"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  submit: string;
  submitting: string;
}
const SubmitButton = ({ submit, submitting }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  let content;

  if (pending)
    return (
      <Button className="w-full py-5 flex gap-2" disabled>
        <Loader2 className="h-5 w-5" />
        <p>{submitting}</p>
      </Button>
    );
  if (!pending)
    return (
      <Button className="w-full py-5" type="submit">
        <p>{submit}</p>
      </Button>
    );
  return content
};

export default SubmitButton;
