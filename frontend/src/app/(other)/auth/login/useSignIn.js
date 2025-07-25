'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotificationContext } from '@/context/useNotificationContext';
import useQueryParams from '@/hooks/useQueryParams';

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const { showNotification } = useNotificationContext();
  const queryParams = useQueryParams();

  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password')
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@demo.com',
      password: '123456'
    }
  });

  const login = handleSubmit(async (values) => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store tokens in localStorage or cookies
      sessionStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      sessionStorage.setItem("user_id", data.user_id);
      sessionStorage.setItem("role_id", data.role_id);

      // Redirect user after successful login
      push(queryParams["redirectTo"] ?? "/dashboard/analytics");

      showNotification({
        message: "Successfully logged in. Redirecting....",
        variant: "success"
      });

    } catch (error) {
      showNotification({
        message: error.message,
        variant: "danger"
      });
    }

    setLoading(false);
  });

  return {
    loading,
    login,
    control
  };
};

export default useSignIn;
