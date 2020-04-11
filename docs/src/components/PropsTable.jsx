import React from "react";

export function PropsTable({ data = {} }) {
  const hasProps = Object.keys(data).length > 0;
  return (
    <>
      {hasProps && (
        <div>
          {Object.entries(data).map(([key, value]) => {
            return (
              <p>
                {key}, {value.type}, {value.description}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}
