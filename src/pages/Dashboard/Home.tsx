import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useValidator } from "../../hooks/useValidator";
import { IMenu } from "../../types/menu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { menuActions } from "../../redux/slices/menuSlice";
import NoMenuSvg from "../../assets/dashboard/no-menu.svg";
import AddMenuSvg from "../../assets/dashboard/add-menu.svg";
import Button from "../../components/Button";
import MenuCard from "../../components/Menu/MenuCard";
import Modal from "../../components/Modals/Modal";
import TextInput from "../../components/Form/TextInput";
import Field from "../../components/Form/Field";
import ModalHeader from "../../components/Modals/ModalHeader";
import TextArea from "../../components/Form/TextArea";
import Loader from "../../components/Loader";
import * as yup from "yup";

function NoMenuItem({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div className="flex h-[100%] w-[100%] items-center justify-center">
      <div className="md:-translate-y-40 md:-translate-x-10 flex flex-col gap-12 items-center justify-center min-w-[500px]">
        <img src={NoMenuSvg} alt="No Menu" />
        <div className="text-center">
          <h1 className="text-[32px] font-bold text-primary mb-2">No menus yet</h1>
          <p className="font-nunito text-[#555]">The menus you create will show up here</p>
        </div>
        <Button width={"280px"} onClick={onButtonClick}>
          Create menu
        </Button>
      </div>
    </div>
  );
}

const createMenuSchema = yup.object({
  name: yup
    .string()
    .min(2, "Menu Name should be greater than 1 character.")
    .required("Menu Name is a required field"),
  description: yup.string().optional(),
});

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, menus, submitting } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (!menus.length) {
      dispatch(menuActions.fetchMenus());
    }
  }, [dispatch, menus]);

  const [menuModal, setMenuModal] = useState(false);
  const [formData, setFormData] = useState<IMenu>({
    name: "",
    description: "",
  });

  const { errors, validate, clearErrOnFocus } = useValidator(formData, createMenuSchema);

  const handleMenuItemClick = (menuId: string) => {
    dispatch(menuActions.selectMenu({ menuId }));
    navigate("/dashboard/categories", {
      state: {
        menuId,
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateMenuClick = async () => {
    if (await validate()) {
      await dispatch(menuActions.createMenu({ menu: formData }));
      setFormData({ name: "", description: "" });
      setMenuModal(false);
    }
  };

  if (loading) return <Loader loading={loading} />;

  return (
    <>
      <Modal visible={menuModal} setModalVisible={setMenuModal}>
        <div className="w-[522px] max-md:w-screen min-h-[513px] max-md:min-h-[70vh] bg-white rounded-md max-md:rounded-tl-3xl max-md:rounded-tr-3xl max-md:translate-y-4 shadow-md px-10 pt-10 pb-14 flex flex-col items-center">
          <div className="flex flex-col h-[100%] max-md:w-full">
            <ModalHeader title="Create a new menu" onClick={() => setMenuModal(false)} />

            <div className="h-[100%]">
              <Field label="Menu Name" error={errors.name}>
                <TextInput
                  placeholder="ex. Kids Menu"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={clearErrOnFocus}
                />
              </Field>

              <div className="mt-4">
                <Field label="Menu Description (Optional)" error={errors.description}>
                  <TextArea
                    placeholder="ex. Very tasty french fries with Gazelles"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    onFocus={clearErrOnFocus}
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Button onClick={handleCreateMenuClick} loading={submitting}>
                  Create Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex h-[100vh] max-h-[100vh] overflow-hidden">
        {menus.length === 0 ? (
          <NoMenuItem onButtonClick={() => setMenuModal(true)} />
        ) : (
          <div className="h-[100%] w-[100%] px-16 max-md:px-6 pt-16 max-md:pt-6 overflow-auto">
            <h1 className="text-primary text-[32px] font-bold">Dashboard</h1>
            <p className="font-nunito text-[#555]">Effortlessly create, manage, and share menus</p>

            <h2 className="text-[20px] text-[#555] font-nunito mt-16">Your menus</h2>

            <div className="flex flex-row flex-wrap mt-6 gap-4 max-md:pb-28 max-md:overflow-y-auto">
              {menus.map((menuItem, index) => (
                <MenuCard
                  name={menuItem.name}
                  categories={menuItem?.categories}
                  items={menuItem?.items}
                  date={menuItem?.date}
                  key={`menu-card-${index}`}
                  onClick={() => handleMenuItemClick(menuItem._id!)}
                />
              ))}

              <div
                className="w-[232px] h-[177px] bg-[#E9F6F2] flex flex-col items-center justify-center rounded-md cursor-pointer"
                onClick={() => setMenuModal(true)}
              >
                <img src={AddMenuSvg} alt="add-menu-icon" />
                <p className="font-nunito mt-4 text-[#555] text-[18px]">New Menu</p>
              </div>
            </div>

            <div className="max-sm:h-[30px]"></div>
          </div>
        )}
      </div>
    </>
  );
}
