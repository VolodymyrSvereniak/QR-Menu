import '@/styles/global/Sign.css';
import RightImages from '../../components/Auth/RightImages.jsx';
import SignInSignUp from './SignInSignUp.jsx';
import SvgCircle from '../../components/SvgCircle.jsx';
import { useAppSelector } from '@/hooks/useAppSelector';

function Sign() {
  const isSign = useAppSelector((state) => state.sign.isSign);
  console.log(isSign);

  const slideCircleClass = 'up';

  return (
    <>
      <main>
        <div id="sign">
          {(isSign === 'in' && (
            <SignInSignUp page={isSign} handleSignCheck={handleSignCheck} />
          )) ||
            (isSign === 'up' && (
              <SignInSignUp page={isSign} handleSignCheck={handleSignCheck} />
            )) ||
            (signCheck === 'reset' && (
              <SvgCircle page={isSign} handleSignCheck={handleSignCheck} />
            ))}
        </div>

        {isSign === 'reset' ? (
          <RightImages page={isSign} svgClass={slideCircleClass} />
        ) : (
          <RightImages page={isSign} />
        )}
      </main>
    </>
  );
}

export default Sign;
