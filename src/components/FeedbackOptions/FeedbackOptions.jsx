import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map((key, i) => {
        return (
          <Button
            onClick={() => onLeaveFeedback(key)}
            key={i}
            buttonStyle={key}
          >
            {key}
          </Button>
        );
      })}
    </ButtonList>
  );
};
