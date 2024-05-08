import { Tipografia } from "../Tipografia";

const HeaderTitle = ({ title, subTitle, description }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Tipografia variante="h1" componente="h1">{title}</Tipografia>
      {subTitle && <Tipografia variante="h3" componente="h2">{subTitle}</Tipografia>}
      {description && <Tipografia variante="body" componente="body">{description}</Tipografia>}
    </div>
  );
}

export default HeaderTitle;
