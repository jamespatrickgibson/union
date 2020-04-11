// import React, { useState } from "react";
import React from "react";

export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const propType = flowType ? flowType : type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return "[Empty string]";
  }
  if (propType && propType.name === "string") {
    return defaultValue.value.replace(/ /g, '"');
  }
  if (typeof defaultValue.value === "object" && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }
  return defaultValue.value;
};

export const Prop = ({ propName, prop, getPropType, isToggle }) => {
  const showing = true;
  // const [showing, setShowing] = useState(isToggle || false);
  if (!prop.type && !prop.flowType) return null;

  // const toggle = () => setShowing(s => !s);
  return (
    <div data-testid="prop">
      <div>
        <div data-testid="prop-name">{propName}</div>
        <div data-testid="prop-type">{getPropType(prop)}</div>
        {prop.defaultValue && (
          <div data-testid="prop-default-value">
            <em>{getDefaultValue(prop)}</em>
          </div>
        )}
        <div>
          {prop.required && (
            <div data-testid="prop-required">
              <strong>required</strong>
            </div>
          )}
          {/* {prop.description && (
            <button onClick={toggle} data-testid="prop-toggle-description">
              {showing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )} */}
        </div>
      </div>
      {showing && prop.description && (
        <div data-testid="prop-description">{prop.description}</div>
      )}
    </div>
  );
};

export const Props = ({ props, getPropType, isToggle }) => {
  const entries = Object.entries(props);

  return (
    <div data-testid="props">
      {entries.map(([key, prop]) => (
        <Prop
          key={key}
          propName={key}
          prop={prop}
          getPropType={getPropType}
          isToggle={isToggle}
        />
      ))}
    </div>
  );
};
