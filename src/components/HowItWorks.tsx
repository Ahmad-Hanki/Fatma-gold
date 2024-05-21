import MotionDiv from "./MotionDiv";

const HowItWorks = () => {
  return (
    <div>
      <div className=" flex-col flex items-center text-center max-w-3xl mx-auto">
        <MotionDiv
         initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once:true,
          amount:0.6
        }}
        transition={{
          duration:1
        }}
          className="pt-24 flex-col flex items-center gap-7"
        >
          <h1 className="text-4xl "> كيف نعمل؟</h1>
          <p className="text-2xl text-secondary-foreground/80">
            ذهب فاطمة منصة لبيع وشراء الذهب الجديد و المستعمل، حيث تتيح
            للمستخدمين التصفح وأخذ أفكار كاملة عن المعروضات والقيام بعمليات
            البيع والشراء بكل أريحية.
          </p>
        </MotionDiv>
        <MotionDiv
           initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once:true,
            amount:0.6
          }}
          transition={{
            duration:1
          }}
          className="py-24 flex-col flex items-center gap-7"
        >
          <h1 className="text-4xl "> لماذا ذهب فاطمة؟</h1>
          <p className="text-2xl text-secondary-foreground/80">
            توفر منصة ذهب فاطمة تجربة آمنة وموثوقة للمستخدمين. يتمتع المستخدمون
            بالثقة في العمليات الوجه لوجه، مما يجعل كل عملية بيع وشراء موثوقة
            ومضمونة.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default HowItWorks;
