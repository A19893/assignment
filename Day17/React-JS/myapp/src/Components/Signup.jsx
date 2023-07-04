import React from "react";

const Signup = () => {
  return (
    <>
      <form className="inputs">
        Username{" "}
        <Input
          size="large"
          style={{ width: 300 }}
          placeholder="Enter username"
          onChange={(e) => nameHandler(e)}
        />
        <br />
        <br />
        Password{" "}
        <Space direction="vertical">
          <Input.Password
            size="large"
            placeholder="Enter password"
            onChange={(e) => passwordHandler(e)}
          />
        </Space>
        <span>{credential ? <h4>Please enter details</h4> : ""}</span>
        <br />
        <br />
        <Radio.Group
          options={options}
          onChange={onChange3}
          value={value3}
          optionType="button"
        />
        <br />
        <br />
        <Space wrap>
          <Button type="primary" id="primary" onClick={(e) => clickHandler()}>
            SignUp
          </Button>
        </Space>
      </form>
    </>
  );
};

export default Signup;
