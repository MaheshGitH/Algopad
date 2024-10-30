const Notice = () => {
  return (
    <div className="border-2 border-warning font-nunito ~text-base/lg flex flex-col gap-6 rounded-2xl px-8 py-9 mx-4 max-w-5xl lg:w-full lg:mx-auto">
      <p className="font-laila font-semibold ~text-xl/2xl text-warning">
        Important Notice: Demo Version Only
      </p>
      <p className="lg:max-w-lg">
        This project, AlgoPad, is a portfolio showcase and is not fully
        functional as described in the features section. User accounts and
        signup features are disabled. However, you can still experience the core
        functionality by using the demo account, which is limited in features
        but gives you a feel for the app.
      </p>
    </div>
  );
};

export default Notice;
