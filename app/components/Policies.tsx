const Policies = () => {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg border border-gray-300">
      <h1 className="border-gray-300 border-b bg-gray-50 p-4 font-bold text-xl">
        Policies
      </h1>

      <div className="divide-y divide-gray-300">
        {/* Check-in */}
        <div className="flex p-4">
          <div className="w-1/3 font-semibold">Check-in</div>
          <div className="w-2/3 text-gray-700">
            <p>From 2:00PM</p>
            <p className="mt-1">
              Guests are required to show a photo ID and credit card at
              check-in.
            </p>
            <p className="mt-1">
              You need to let the property know what time you'll be arriving in
              advance.
            </p>
          </div>
        </div>

        {/* Check-out */}
        <div className="flex p-4">
          <div className="w-1/3 font-semibold">Check-out</div>
          <div className="w-2/3 text-gray-700">
            <p>Until 2:00PM</p>
          </div>
        </div>

        {/* Cancellation/prepayment */}
        <div className="flex p-4">
          <div className="w-1/3 font-semibold">Cancellation/prepayment</div>
          <div className="w-2/3 text-gray-700">
            <p>
              Cancellation and prepayment policies vary according to
              accommodation type.
            </p>
          </div>
        </div>

        {/* No age restriction */}
        <div className="flex p-4">
          <div className="w-1/3 font-semibold">No age restriction</div>
          <div className="w-2/3 text-gray-700">
            <p>There's no age requirement for check-in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
