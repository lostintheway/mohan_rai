"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyComponent = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a different page after 3 seconds (3000 milliseconds)
    const redirectTimer = setTimeout(() => {
      router.push("/"); // Replace '/another-page' with the desired page path
    }, 1);

    // Clear the timer to avoid the redirect if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]); // The empty dependency array ensures this effect runs only once on mount

  return <div>{/* You can add more content here */}</div>;
};

export default MyComponent;
