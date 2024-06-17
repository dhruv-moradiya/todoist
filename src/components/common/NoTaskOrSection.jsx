function NoTaskOrSection() {
  return (
    <div className="flex w-[260px] flex-col items-center gap-4">
      <div className="h-[250px] w-full overflow-hidden">
        <img
          className="h-full w-full object-fill"
          src="./noSection_Task.png"
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-[16px] font-semibold">
          Start small (or dream big)...
        </h3>
        <p className="text-center text-[14px]">
          Add your tasks or find a template to get started with your project.
        </p>
      </div>
    </div>
  );
}

export default NoTaskOrSection;
