import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useValidator } from "../../hooks/useValidator";
import { IFood } from "../../types/menu";
import { fileTest } from "../../utils/files";
import TopBar from "../../components/Menu/TopBar";
import AddButton from "../../components/Menu/AddButton";
import MenuItem from "../../components/Menu/MenuItem";
import Modal from "../../components/Modals/Modal";
import ModalHeader from "../../components/Modals/ModalHeader";
import Field from "../../components/Form/Field";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button";
import DropZone from "../../components/Form/DropZone";
import Loader from "../../components/Loader";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { foodActions } from "../../redux/slices/foodItemSlice";
import { ICloudinaryFile } from "../../types/auth";

const foodSchema = yup.object({
  name: yup
    .string()
    .min(2, "Food Name must be greater than 1 character")
    .required("Food Name is a required field"),
  price: yup
    .number()
    .min(0, "Price must be greater than 0")
    .max(1000000)
    .required("Price is a required field"),
  image: fileTest(yup.string().required("Please select an image"), 5),
});

export default function Foods() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { submitting, loading, foods } = useAppSelector((state) => state.food);

  const location = useLocation();

  // useEffect(() => {
  //   dispatch(foodActions.fetchFoods({ itemId: location.state.categoryId }));
  // }, [dispatch, location.state.categoryId]);

  const [formData, setFormData] = useState<IFood>({
    name: "",
    price: "",
    image: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const { errors, validate, clearErrOnFocus } = useValidator(formData, foodSchema);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMenuItemClick = (selectedFood: string) => {
    console.log(selectedFood);
  };

  const handleAddFood = async () => {
    if (await validate()) {
      dispatch(foodActions.createFood({ name: formData.name, image: formData.image as string }));
    }
  };

  if (loading) return <Loader loading={loading} />;

  return (
    <>
      <Modal visible={modalVisible} setModalVisible={setModalVisible}>
        <div className="w-[522px] min-h-[595px] bg-white rounded-md shadow-md px-10 pt-10 pb-14 flex flex-col items-center">
          <div className="flex flex-col h-[100%]">
            <ModalHeader title="Add a food item" onClick={() => setModalVisible(false)} />

            <div className="h-[100%] w-[100%]">
              <Field error={errors.image as string}>
                <DropZone
                  file={formData.image as string}
                  onFileChange={(value) => {
                    setFormData({ ...formData, image: value });
                  }}
                  onFocus={() => {
                    clearErrOnFocus({
                      target: { name: "image" },
                    } as unknown as React.FocusEvent<HTMLInputElement>);
                  }}
                />
              </Field>

              <div className="mt-4">
                <Field label="Name" error={errors.name}>
                  <TextInput
                    placeholder="ex. Spaghetti Bolognese"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={clearErrOnFocus}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Price" error={errors.price}>
                  <TextInput
                    placeholder="ex. ₦1500.00"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    onFocus={clearErrOnFocus}
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Button onClick={handleAddFood} loading={submitting}>
                  Add Food
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex flex-col w-full h-full">
        <TopBar />

        <div className="flex flex-col w-[100%] h-full px-16 py-6">
          <div className="flex flex-row h-[45px] w-[100%] items-center justify-between">
            <h1 className="text-primary text-[32px] font-bold">{params?.categoryId}</h1>

            <AddButton text="Add Food Item" onClick={() => setModalVisible(true)} />
          </div>

          <div className="flex flex-wrap mt-10 gap-6">
            {!!foods.length &&
              foods.map((food, index) => {
                const menu = {
                  name: food.name,
                  image: (food.image as ICloudinaryFile).secure_url!,
                  subtitle: `${food.price}`,
                };

                return (
                  <MenuItem
                    key={`menu-item-${index}`}
                    menuItem={menu}
                    onClick={() => handleMenuItemClick(food.name)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
