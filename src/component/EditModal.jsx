"use client";
import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import toast from "react-hot-toast";

const EditModal = ({ petData }) => {
  const { age, breed, description, gender, adoptionFee, healthStatus, image, location, petName, species, vaccinationStatus } = petData;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Updatedata = Object.fromEntries(formData.entries());
    const{data:TokenData}= await authClient.token();
    const res = await fetch(`http://localhost:8000/pet/${petData._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization:`Bearer ${TokenData?.token}`
      },
      body: JSON.stringify(Updatedata)
    });
    const data = await res.json();
    console.log(data);
    if(data.modifiedCount>0){
      toast.success('updated sucessfully!!')
      window.location.reload();
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="hover:cursor-pointer w-full bg-foreground/4 dark:bg-zinc-800/50 text-foreground border border-foreground/10 font-bold text-md py-3 rounded-xl transition-all duration-200 hover:bg-foreground hover:text-background active:scale-[0.97]">
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-pink-500/10 text-pink-500">
                <PencilToSquare className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Pet Listing</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update the details for <strong>{petName}</strong>.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={onSubmit} className="space-y-6">

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Pet Name</label>
                    <input
                      name="petName"
                      type="text"
                      required
                      defaultValue={petName}
                      placeholder="e.g., Buddy, Lucy"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Species</label>
                    <select
                      name="species"
                      required
                      defaultValue={species || ""}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Species</option>
                      <option value="Dog">Dog 🐶</option>
                      <option value="Cat">Cat 🐱</option>
                      <option value="Bird">Bird 🦜</option>
                      <option value="Rabbit">Rabbit 🐰</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Breed</label>
                    <input
                      name="breed"
                      type="text"
                      required
                      defaultValue={breed}
                      placeholder="e.g., Golden Retriever"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Age</label>
                    <input
                      name="age"
                      type="text"
                      required
                      defaultValue={age}
                      placeholder="e.g., 6 Months, 2 Years"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Gender</label>
                    <select
                      name="gender"
                      required
                      defaultValue={gender || ""}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Image URL</label>
                    <input
                      name="image"
                      type="url"
                      required
                      defaultValue={image}
                      placeholder="https://i.ibb.co/..."
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Health Status</label>
                    <select
                      name="healthStatus"
                      defaultValue={healthStatus || "Healthy"}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
                    >
                      <option value="Healthy">Healthy</option>
                      <option value="Injured">Injured</option>
                      <option value="Under Treatment">Under Treatment</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Vaccination Status</label>
                    <select
                      name="vaccinationStatus"
                      defaultValue={vaccinationStatus || "Not Vaccinated"}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground focus:border-pink-500 focus:outline-none transition-all text-base cursor-pointer"
                    >
                      <option value="Not Vaccinated">Not Vaccinated</option>
                      <option value="Partially Vaccinated">Partially Vaccinated</option>
                      <option value="Fully Vaccinated">Fully Vaccinated</option>
                    </select>
                  </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Location</label>
                    <input
                      name="location"
                      type="text"
                      required
                      defaultValue={location}
                      placeholder="e.g., Mirpur, Dhaka"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-sm text-foreground">Adoption Fee (BDT)</label>
                    <input
                      name="adoptionFee"
                      type="number"
                      min="0"
                      required
                      defaultValue={adoptionFee}
                      placeholder="0 for free adoption"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                    />
                  </div>
                </div>

               
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-bold text-sm text-foreground">Description</label>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    defaultValue={description}
                    placeholder="Tell us about the pet's behavior, habits, history..."
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground placeholder:text-foreground/30 focus:border-pink-500 focus:outline-none transition-all text-base"
                  />
                </div>

                
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  💾 Save Changes
                </button>

              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;