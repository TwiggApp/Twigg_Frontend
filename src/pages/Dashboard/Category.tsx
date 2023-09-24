import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Menu/AddButton";
import MenuItem from "../../components/Menu/MenuItem";
import TopBar from "../../components/Menu/TopBar";
import RiceImg from "../../assets/foods/rice.svg";
import PastaImg from "../../assets/foods/pasta.svg";
import Modal from "../../components/Modals/Modal";
import ModalHeader from "../../components/Modals/ModalHeader";
import Button from "../../components/Button";
import TextInput from "../../components/Form/TextInput";
import Field from "../../components/Form/Field";
import DropZone from "../../components/Form/DropZone";
import * as yup from "yup";
import { ICategory } from "../../types/menu";
import { useValidator } from "../../hooks/useValidator";

const menuItems = [
  { id: 1, name: "Rice", items: 6, image: RiceImg },
  { id: 2, name: "Pasta", items: 9, image: PastaImg },
  { id: 3, name: "Soups", items: 20, image: RiceImg },
  { id: 4, name: "Stew", items: 6, image: PastaImg },
  { id: 5, name: "Sides", items: 4, image: RiceImg },
  { id: 6, name: "Drinks", items: 23, image: PastaImg },
  { id: 7, name: "Pepper Soup", items: 4, image: RiceImg },
  { id: 8, name: "Proteins", items: 5, image: PastaImg },
];

const categorySchema = yup.object({
  name: yup
    .string()
    .min(2, "Category Name must be greater than 1 character")
    .required("Category Name is a required field"),
});

export default function Category() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ICategory>({
    name: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

  const { errors, validate, clearErrOnFocus } = useValidator(formData, categorySchema);

  const handleMenuItemClick = (category: string) => {
    navigate(`/dashboard/categories/${category}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCategory = async () => {
    if (await validate()) {
      console.log("Creating Category...");
    }
  };

  return (
    <>
      <Modal visible={modalVisible} setModalVisible={setModalVisible}>
        <div className="w-[522px] min-h-[513px] bg-white rounded-md shadow-md px-10 pt-10 pb-14 flex flex-col items-center">
          <div className="flex flex-col h-[100%]">
            <ModalHeader title="Add a new category" onClick={() => setModalVisible(false)} />

            <div className="h-[100%]">
              <div>
                <DropZone />
              </div>

              <div className="mt-4">
                <Field label="Category Name" error={errors.name}>
                  <TextInput
                    placeholder="ex. Soups"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={clearErrOnFocus}
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Button onClick={handleAddCategory}>Add Category</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex flex-col h-[100vh]">
        <TopBar />

        <div className="flex flex-col w-[100%] h-full px-16 py-6">
          <div className="flex flex-row h-[45px] w-[100%] items-center justify-between">
            <h1 className="text-primary text-[32px] font-bold">Categories</h1>

            <AddButton text="New Category" onClick={() => setModalVisible(true)} />
          </div>

          <div className="flex flex-wrap mt-10 gap-6">
            {menuItems.map((menuItem, index) => {
              const menu = { ...menuItem, subtitle: `${menuItem.items} items` };
              return (
                <MenuItem
                  key={`menu-item-${index}`}
                  menuItem={menu}
                  onClick={() => handleMenuItemClick(menu.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
