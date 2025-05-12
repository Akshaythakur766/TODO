"use client";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "Todo/Components/ui/dialog";
import { Button } from "Todo/Components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { auth } from "Todo/config/Firebase";
import styles from "Todo/styles/Login.module.scss";
import apple from "../../public/apple_gray.svg";
import facebook from "../../public/facebook.svg";
import google from "../../public/google png.svg";
import image from "../../public/newpreview.webp";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

const Login = ({ CLoseModal, modal }: { CLoseModal: any; modal: boolean }) => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  // Firebase authentication functions
  const handleLogin = async (provider: any) => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        router.push("/task");
        toast.success("Successfully Logged In");
      }
    } catch (error: any) {
      toast.error(`Failed to log in: ${error?.message}`);
      console.error(error);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={CLoseModal}>
      <DialogContent className=" md:max-w-5xl  p-0 border-0">
        <div className="flex ">
          <div className=" w-1/2 hidden  md:block">
            <Image src={image} className="rounded-l-lg " alt="Modal" />
          </div>
          <div className="w-full md:w-1/2 mt-10 mb-10 md:m-0 flex flex-col items-center   justify-center gap-12">
            <div className="flex flex-col justify-center items-center">
              <DialogTitle className="text-5xl ">Hi, there</DialogTitle>
              <DialogDescription>
                Welcome to ToDo, so happy to see you!
              </DialogDescription>
            </div>
            <div className="flex flex-col gap-5">
              <Button
                variant={"outline"}
                className=" w-75 h-12"
                onClick={() => handleLogin(new GoogleAuthProvider())}
              >
                <Image src={google} alt="Google" width={30} />
                Continue with Google
              </Button>
              <Button
                variant={"outline"}
                className="w-75 h-12"
                onClick={() => handleLogin(new FacebookAuthProvider())}
              >
                <Image src={facebook} alt="Facebook" width={40} />
                Continue with Facebook
              </Button>
              <Button
                variant={"outline"}
                className=" w-75 h-12"
                onClick={() => handleLogin(new GithubAuthProvider())}
              >
                <Image src={apple} alt="Apple" />
                Continue with Apple
              </Button>
            </div>
          </div>
        </div>

        {/* <React.Fragment>
          <div className={styles.ModalContainer}>
            <Image src={image} className={styles.imageWid} alt="Modal" />
            <div className={styles.outPop}>
              <div className={styles.popup}>
                <h1>Hi, there</h1>
                <p>Welcome to ToDo, so happy to see you!</p>
                <div
                  className={styles.icons}
                  onClick={() => handleLogin(new GoogleAuthProvider())}
                >
                  <Image src={google} alt="Google" width={30} />
                  Continue with Google
                </div>
                <div
                  className={styles.icons}
                  onClick={() => handleLogin(new FacebookAuthProvider())}
                >
                  <Image src={facebook} alt="Facebook" width={40} />
                  Continue with Facebook
                </div>
                <div
                  className={styles.icons}
                  onClick={() => handleLogin(new GithubAuthProvider())}
                >
                  <Image src={apple} alt="Apple" />
                  Continue with Apple
                </div>
                <button onClick={CLoseModal} className={styles.close}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
        </React.Fragment> */}
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={CLoseModal} type="button" variant="default" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default Login;
