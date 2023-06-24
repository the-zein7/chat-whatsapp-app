import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
   return (
      <div className="background">
         <PrettyChatWindow
            projectId='77ad492c-d9fd-45d3-9d4b-3f629f2629ab'
            username={props.user.username}
            secret={props.user.secret}
         />
      </div>
   );
};

export default ChatsPage;