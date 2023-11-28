import { ReactElement } from "react";

export const DarkLayout = ({children}:{children:ReactElement}) => {
  return (
    <div style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: '10px',
        borderRadius: '5px'
    }}>
        <div>
            <h3>Dark-Layout</h3>
            {children}
        </div>
    </div>
  );
}
