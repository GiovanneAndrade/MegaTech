import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CloseOrder } from "../closeOrder/CloseOrder";
import { Amount, StepperContainer } from "./StepperStyles";
import { AddAnddress } from "../address/Address";
import AddressMap from "../address/AddressMap";
import CreditCard from "../creditCard/CreditCard";
import {
  AddAnddressContainer,
  AddAnddressSummary,
} from "../address/AddressStyles";
import OrderSummary from "../summary/Summary";
import OrderComplete from "../orderComplete/OrderComplete";
import CancelOrder from "../orderComplete/CancelOrder";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { OrderContext } from "../../contexts/OrderContext";
import { AnddressContext } from "../../contexts/Anddress";
import { AppContext } from "../../contexts/AppContext";
import { useCreateOrder } from "../../hooks/UseOrders";
import { Saved } from "../creditCard/Saved";
import pare from "../../assets/images/pare.gif";
import { NewContainerHome } from "../../pages/historic/Historic";
import { ContainerHome } from "../../pages/home/Home";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const steps = [
  "Confirme os produtos",
  "Escolha o endereço",
  "Escolha o pagamento",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [productSelection, setProductSelection] = React.useState();
  const { selectedAddress, setSelectedAddress } =
    React.useContext(AnddressContext);
  const {
    isTotal,
    setIsTotal,
    finalOrder,
    errorOrder,
    setErrorOrder,
    setNewOrder,
    newOrder,
  } = React.useContext(OrderContext);
  const { newCard, setNewCard, showCard, setShowCard, saved, setSaved } =
    React.useContext(AppContext);

  const { postOrder } = useCreateOrder();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async (activeStep, finalOrder, postOrder) => {
    if (!isTotal || isTotal.length === 0) {
      return toast.info("Escolha um Produto!");
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === 1 && !selectedAddress) {
      return  toast.info("Escolha o Endereço!");
    }
    if (activeStep === 2 && !showCard) {
      return  toast.info("Adicione ou Escolha o Cartão de Pagamento!")
    }
    if (activeStep === 2) {
      const hasError = await postOrder(finalOrder);
      if (hasError) {
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = (activeStep) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    if (activeStep === 1) {
      localStorage.removeItem("selectedProducts");
      setIsTotal([]);
    }
    if (activeStep === 2) {
      setSelectedAddress(null);
    }
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    const selectedProducts = getFromLocalStorage("selectedProducts");
    if (!selectedProducts) {
      setIsTotal([]);
    }
  }, []);

  const megaTechCart = getFromLocalStorage("megaTechCart");
  const existingProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];
  const total = isTotal?.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const myToken = getFromLocalStorage("megaTechAuth");
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} sx={{ paddingBottom: "20px" }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          /*  if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          } */
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <OrderComplete />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 ? (
              <StepperContainer>
                {megaTechCart?.map((i) => (
                  <CloseOrder
                    id={i?.id}
                    img={i?.image}
                    quantitys={i?.quantity}
                    price={i?.price}
                    name={i?.name}
                    productSelection={productSelection}
                  />
                ))}

                <Amount>
                  <p>valor total R$ {total ? total : "0"}</p>
                </Amount>
              </StepperContainer>
            ) : activeStep + 1 === 2 ? (
              myToken ? (
                <AddAnddress />
              ) : (
                <ContainerHome>
                  <NewContainerHome>
                    Faça Login Para Prosseguir
                    <img src={pare} />
                  </NewContainerHome>
                </ContainerHome>
              )
            ) : (
              <AddAnddressContainer>
                <AddAnddressSummary>
                  {saved ? <Saved /> : <CreditCard />}
                </AddAnddressSummary>
                <OrderSummary isTotal={total} />
              </AddAnddressContainer>
            )}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() => handleBack(activeStep)}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/*  {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button
              onClick={() => handleNext(activeStep, finalOrder, postOrder)}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
