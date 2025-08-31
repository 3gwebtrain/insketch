import Image from "next/image";

function SiteLogo(): React.ReactElement {
  return (
    <div className="flex-inline">
      <Image
        src="/images/Logo-Insketch-Graphics.svg"
        alt="Insketch Graphics Logo"
        width={200}
        height={100}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default SiteLogo;
