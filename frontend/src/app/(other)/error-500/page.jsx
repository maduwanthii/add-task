import Image from 'next/image';
import Link from 'next/link';
import errorSvg from '@/assets/images/extra/error.svg';
import logoSmImg from '@/assets/images/logo-sm.png';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col } from 'react-bootstrap';
export const metadata = {
  title: 'Error 505'
};
const Error505 = () => {
  return <Col lg={4} className="mx-auto">
      <Card>
        <CardBody className="p-0 bg-black auth-header-box rounded-top">
          <div className="text-center p-3">
            <Link href="/" className="logo logo-admin">
              <Image src={logoSmImg} height={50} alt="logo" className="auth-logo" />
            </Link>
            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Sorry! Unexpected Server Error</h4>
            <p className="text-muted fw-medium mb-0">Back to dashboard of Rizz</p>
          </div>
        </CardBody>
        <CardBody className="pt-0">
          <div className="ex-page-content text-center">
            <Image src={errorSvg} height={170} width={170} alt={'server-error'} />
            <h1 className="my-2">500!</h1>
            <h5 className="fs-16 text-muted mb-3">Internal Server Error</h5>
          </div>
          <Link href="/" className="btn btn-primary w-100 flex-centered">
            Back to Dashboard <IconifyIcon icon="fa6-solid:arrow-rotate-right" className="ms-1" />
          </Link>
        </CardBody>
      </Card>
    </Col>;
};
export default Error505;