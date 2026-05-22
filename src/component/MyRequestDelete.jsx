import React from 'react';
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";


  
 

const MyRequestDelete = ({request}) => {
     const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/myRequest/${request._id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
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
               className="w-full bg-red-500/10 text-red-500 border border-red-500/20 font-bold text-md py-3 rounded-xl transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-[0.97]"
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
                       This will permanently delete <strong>{request?.petName || "this pet"}</strong> and all of its data. This action cannot be undone.
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

export default MyRequestDelete;