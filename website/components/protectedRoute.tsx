/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { storage } from '@/lib/utils/storage';
import { isauthorize, isNotauthorize } from '@/store/action/authorizeAction';
import { siteConfig } from '@/config/site';

const ProtectedRouteAdmin = ({ children }: { children: React.ReactNode; }) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const isAuthorized = isauthorize()


  useEffect(() => {
    const checkToken = async () => {
      const storedToken = storage.get('token');

      if (storedToken) {
        try {
          const response = await fetch('/api/tokens/route', {
            method: "GET",
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            dispatch(isauthorize());
            router.push(siteConfig.portals.dashboard.href);
          } else {
            // Xử lý trường hợp token không hợp lệ (ví dụ: xóa token, hiển thị thông báo)
            dispatch(isNotauthorize());
            storage.remove('token');
            toast.error('Token không hợp lệ');
          }
        } catch (error) {
          console.error('Error checking token:', error);
          storage.remove('token');
          toast.error('Lỗi khi kiểm tra token');
        }
      }
      else {
        console.log("Error")
      }
    };

    checkToken();
  }, []);
  console.log(isAuthorized)

  return isAuthorized ? children : null;
};

export default ProtectedRouteAdmin;
