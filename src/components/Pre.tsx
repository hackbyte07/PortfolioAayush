type props = {
  load: boolean;
};

function Pre(props: props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
