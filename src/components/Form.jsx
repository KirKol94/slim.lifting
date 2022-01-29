import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../helpers/helpers';

function FormComponent() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const onSubmitForm = () => {
    emailjs
      .sendForm(
        'service_r1ce8gz',
        'template_pxe6se2',
        form.current,
        'user_b4rqpGwqstlNpjzY1dfLV',
      )
      .then(
        () => { },
        () => { },
      );

    localStorage.setItem('data-sent', 'true');
    setIsSent(true);
    reset();
  };

  if (localStorage.getItem('data-sent')) {
    setTimeout(() => {
      setIsSent(false);
      localStorage.clear();
    }, 1000 * 60);
  }

  return (
    <div>
      {!isSent && (
        <>
          <h3 className="text-center mb-3">
            Заполните форму и мы свяжемся с Вами в ближайшее время
          </h3>

          <Form id="form" ref={form} onSubmit={handleSubmit(onSubmitForm)}>
            <Form.Group id="formBasicEmail">
              <Form.Label className="mt-3">Имя*</Form.Label>
              <Form.Control
                id="user_firstname"
                name="user_firstname"
                placeholder="Введите ваше имя"
                {...register('user_firstname', {
                  required: 'Это обязательное поле',
                  minLength: {
                    value: 2,
                    message: 'Это слишком короткое имя',
                  },
                  maxLength: {
                    value: 15,
                    message: 'А это слишком длинное имя!',
                  },
                })}
              />
              {errors?.user_firstname && (
                <Form.Text>
                  {errors?.user_firstname?.message
                    || 'Поле не может быть пустым'}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group id="formBasicPassword">
              <Form.Label className="mt-3">Фамилия*</Form.Label>
              <Form.Control
                id="user_lastname"
                name="user_lastname"
                placeholder="Введите вашу фамилию"
                {...register('user_lastname', {
                  required: 'Это обязательное поле',
                  minLength: {
                    value: 2,
                    message: 'Это слишком короткая фамилия',
                  },
                  maxLength: {
                    value: 15,
                    message: 'А это слишком длинная фамилия!',
                  },
                })}
              />
              {errors?.user_lastname && (
                <Form.Text>
                  {errors?.user_lastname?.message
                    || 'Поле не может быть пустым'}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group id="formBasicPassword">
              <Form.Label className="mt-3">Номер телефона*</Form.Label>
              <Form.Control
                data-tel-input
                id="user_phone"
                name="user_phone"
                placeholder="+7 (999) 999-99-99"
                type="tel"
                maxLength={18}
                {...register('user_phone', {
                  required: 'Это обязательное поле',
                  minLength: {
                    value: 17,
                    message: 'Закончите вводить номер',
                  },
                })}
              />
              {errors?.user_phone && (
                <Form.Text>
                  {errors?.user_phone?.message || 'Поле не может быть пустым'}
                </Form.Text>
              )}
            </Form.Group>

            <Button
              className="mt-3 mb-5 btn btn-dark btn-outline-success"
              type="submit"
            >
              Отправить
            </Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default FormComponent;
