'use client'
import ErrorComponent from "@/components/ErrorComponent";
import React from "react";

export default function CharacterErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorComponent onClick={reset} />;
}
