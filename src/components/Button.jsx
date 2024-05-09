import '../index.css'


function Button(props) {
  return (
    <div
      onClick={props.onClick}
    className='button-primary'
    >
      {props.children}
    </div>
  );
}

function Success(props) {
  return (
    <div
      onClick={props.onClick}
      className='button-success'
    >
      {props.children}
    </div>
  );
}

function Danger(props) {
  return (
    <div
      onClick={props.onClick}
      className='button-danger'
    >
      {props.children}
    </div>
  );
}

function Secondary(props) {
  return (
    <div
      onClick={props.onClick}
      className='buttton-secondary'
    >
      {props.children}
    </div>
  );
}

function Accent(props) {
  return (
    <div
      onClick={props.onClick}
      className='button-accent'
    >
      {props.children}
    </div>
  );
}

function Text(props) {
  return (
    <div
      onClick={props.onClick}
      className='button-text'
    >
      {props.children}
    </div>
  );
}

Button.Success = Success;
Button.Danger = Danger;
Button.Secondary = Secondary;
Button.Accent = Accent;
Button.Text = Text;
export { Button };
