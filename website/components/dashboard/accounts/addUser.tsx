import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-toastify";
import { storage } from "@/lib/utils/storage";

export const AddUser = () => {
  const storedToken = storage.get('token');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })



  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newUser.email || !newUser.password || !newUser.username || !newUser.phone || !newUser.confirmPassword) {
      toast.error('All fields are necessary')

      return;
    } else if (newUser.password !== newUser.confirmPassword) {
      toast.error('Confirm password not correct')
    }
    try {
      const res = await axios.post("/api/users/admin", newUser, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      if (res.status === 201) {

        setNewUser({
          username: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        })
      } else {
        toast.error('User login failed');
      }
    } catch (err) {
      toast.error('Server Error');
      console.log("Errors", err);
    }
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setNewUser({
      ...newUser,
      [fieldName]: value,
    });
  };

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add User
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Email"
                    variant="bordered"
                    value={newUser.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                  <Input
                    label="Username"
                    variant="bordered"
                    value={newUser.username}
                    onChange={(e) => handleFieldChange('username', e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    variant="bordered"
                    value={newUser.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                  />

                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    value={newUser.password}
                    onChange={(e) => handleFieldChange('password', e.target.value)}
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    variant="bordered"
                    value={newUser.confirmPassword}
                    onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={(e) => handleSubmit(e)} onPress={onClose}>
                    Add User
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
