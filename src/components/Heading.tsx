type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};
