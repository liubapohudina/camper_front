import { useForm, Controller } from "react-hook-form";
import {
  Label,
  Input,
  TextArea,
  Form,
  FormBox,
  Hform,
  TextForm,
  StyledDatePicker,
  SpanError
} from "./BookingForm.styled";
import icons from "../../../../../assets/icons/symbol-defs.svg";
import { Icon } from "../../../../Catalog/CamperList/CamperItem/CamperItem.styled";
import MainBtn from "../../../../MainBtn/MainBtn";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    trigger,
  } = useForm({
    mode: "onBlur",
  });

  const userData = [];

  const onSubmit = (data) => {
    userData.push(data);
    window.location.reload();
  };

  return (
    <FormBox>
      <Hform>Book a Camper</Hform>
      <TextForm>Stay connected! We are always ready to help you.</TextForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            onBlur={() => trigger("name")}
          />
          {errors.name && <SpanError>Name is required</SpanError>}
        </Label>

        <Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            onBlur={() => trigger("email")}
          />
          {errors.email && <SpanError>Enter a valid email</SpanError>}
        </Label>

        <Label>
          <Controller
            control={control}
            name="bookingDate"
            rules={{ required: true }}
            render={({ field }) => (
              <StyledDatePicker
              className="datapicker"
                placeholderText="Booking date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="yyyy/MM/dd"
                onBlur={() => trigger("bookingDate")}
              />
            )}
          />
          <Icon
            size={20}
            fill="white"
            stroke="var(--main-text-color)"
            cursor="pointer"
            $right={32}
            $top={18} 
            $bottom={18}
            $absolute='absolute' 
          >
            <use href={`${icons}#icon-Button`}></use>
          </Icon>
          {errors.bookingDate && <SpanError>Booking date is required</SpanError>}
        </Label>

        <Label>
          <TextArea placeholder="Comment" {...register("comment")} />
        </Label>

        <MainBtn type="submit" text={'Send'} disabled={!isValid}>Book Now</MainBtn>
      </Form>
    </FormBox>
  );
};

export default BookingForm;

