import React, { Children } from "react";
const imgUrl =
  "https://s3-alpha-sig.figma.com/img/a3dc/27f3/af41d6bd7ea04424627de8b19c250434?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R67mTQ81Gdrwe7sjji94Gs9tsSDWU2aIvhNzsNfFaIzymkqLT43AHAzNE6Uq6jZ9Trmzet-QTE1~fas~TOEMpE3ARuVoPteWLlzOqV0SQix9QO7Lf7KA8i1PAlyzernFgVJq9Bp9fxGhpRPpWm-ZBjSH4Pmqbl7CgSNDMi3YlRBP23McQUBl9AgOXw~68jlcAzR~1H6WBFsu5SNqRKl4JbHd8HooG4O4t76V3V5hjGeilNLP8vCudD~Tpmi55FuQ8pA-QBmW~78V47vUeqppoMdFmUcPkLnErB8J-FoPHJefICQSo9QQ54N4OSiLbzR1J4hLHNgwJMJBEAm8QMTOaw__";
function LoginLayout({ children }) {
  return (
    <div
      className="flex justify-center items-center bg-no-repeat bg-cover bg-center relative min-h-screen p-4 z-0"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/[85%] -z-10"></div>
      <div className="bg-white p-5 rounded-3xl min-h-[480px] max-h-[480px] overflow-y-auto max-w-sm w-full flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default LoginLayout;
