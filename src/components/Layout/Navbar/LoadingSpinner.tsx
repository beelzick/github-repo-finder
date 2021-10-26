import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../../redux/loadingSlice';

const LoadingSpinner = () => {
    const loading = useSelector(selectLoading)
    return (
        <div style={{ marginTop: '7px', width: '80px' }}>
            {loading && (
                <Loader
                    type='Oval'
                    height={30}
                    color='#58a6ff'
                />
            )}
        </div>
    )
}

export default LoadingSpinner