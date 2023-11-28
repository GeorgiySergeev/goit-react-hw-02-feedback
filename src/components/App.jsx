import { FeadbackForm } from './FeadbackForm/FeadbackForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 50,
        // background: 'gray',
      }}
    >
      <FeadbackForm
        name={{
          btn1: 'Good',
          btn2: 'Neutral',
          btn3: 'Bad',
        }}
      />
    </div>
  );
};
