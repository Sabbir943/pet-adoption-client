"use client";
import React from "react";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const DeleteDialog = ({ petData }) => {
  
  const handleDelete = async () => {
   
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${petData?._id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          //  authorization:`Bearer ${TokenData?.token}`
        }
      });
      
      const result = await res.json();
      console.log("Deleted successfully:", result);
      toast.success("Successfully-removed!!")
      window.location.reload();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <AlertDialog>
    
      <Button
        className="w-full bg-foreground text-background text-md py-6 rounded-xl font-bold"
      >
        Delete
      </Button>

      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 bg-background border border-foreground/10 rounded-2xl p-6">
            <AlertDialog.CloseTrigger />
            
            <AlertDialog.Header className="flex items-center gap-3">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-xl font-black text-red-500">
                Delete Pet Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            
            <AlertDialog.Body className="mt-3">
              <p className="text-sm text-foreground/70">
                This will permanently delete <strong>{petData?.petName || "this pet"}</strong> and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            
            <AlertDialog.Footer className="mt-6 flex justify-end gap-2">
             
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={handleDelete} variant="danger-soft" color="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDialog;