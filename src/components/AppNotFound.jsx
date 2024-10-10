import { Button, Result } from 'antd';

const AppNotFound = () => (
    <Result
    className='notFoundIcon'
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
            <Link>
                <Button type="primary"  >Back Home</Button>
            </Link>
        }
    />
);

export default AppNotFound;
