import { lubricantes } from "@/lib/suzuki-data";

function EcstarPanel() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0a1a3a] via-[#0a2456] to-[#04102b] p-5 text-white">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
      <div className="relative">
        <p className="font-display text-2xl font-bold italic tracking-tight text-white">
          ECSTAR
        </p>
        <p className="text-[10px] font-semibold tracking-[0.3em] text-blue-200">
          SUZUKI GENUINE OIL
        </p>
        <p className="mt-4 font-display text-lg font-semibold leading-tight text-blue-100">
          CORAZÓN SUZUKI,
          <br />
          <span className="text-suzuki-red">RENDIMIENTO ECSTAR</span>
        </p>
        <div className="mt-5 flex items-end justify-center gap-2">
          {["R9000", "R7000", "R5000"].map((r, i) => (
            <div
              key={r}
              className="flex flex-col items-center rounded-sm bg-gradient-to-b from-neutral-100 to-neutral-300 px-2 pb-2 pt-3 text-neutral-900 shadow-lg"
              style={{ height: `${86 + i * 6}px` }}
            >
              <span className="text-[8px] font-bold text-suzuki-red">SUZUKI</span>
              <span className="text-[10px] font-black leading-none">ECSTAR</span>
              <span className="mt-auto text-[9px] font-semibold text-blue-800">
                {r}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-neutral-300 bg-white px-3 py-2.5 text-[13px] text-neutral-700 outline-none transition-colors placeholder:text-neutral-400 focus:border-suzuki-red"
    />
  );
}

function SelectField({ placeholder }: { placeholder: string }) {
  return (
    <select
      defaultValue=""
      className="w-full appearance-none border border-neutral-300 bg-white px-3 py-2.5 text-[13px] text-neutral-500 outline-none transition-colors focus:border-suzuki-red"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      <option>Opción 1</option>
      <option>Opción 2</option>
    </select>
  );
}

export function Lubricantes() {
  return (
    <section className="border-t border-neutral-200 bg-white py-14">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-[220px_260px_1fr] xl:px-0">
        {/* Left: ECSTAR product */}
        <div>
          <EcstarPanel />
          <p className="mt-3 text-[10px] leading-4 text-neutral-500">
            Precio de venta sugerido al público. Vigencia del Válido del 1 al 31
            de julio del 2026.
          </p>
          <div className="mt-4 bg-black p-3">
            <p className="text-[10px] font-semibold tracking-suzuki text-white">
              <span className="text-suzuki-red">SUZUKI</span> — Tu Moto en las
              mejores manos
            </p>
            <p className="font-display text-sm font-bold tracking-suzuki text-white">
              EXPERTOS SUZUKI
            </p>
            <div className="mt-2 h-16 w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
          </div>
        </div>

        {/* Middle: oil list */}
        <div>
          <h3 className="font-display text-2xl font-bold leading-tight text-suzuki-ink">
            Lubricante de motor para su motocicleta
          </h3>
          <div className="mt-5 divide-y divide-neutral-200 border-t border-neutral-200">
            {lubricantes.map((l) => (
              <div
                key={`${l.name}-${l.spec}`}
                className="flex items-center justify-between py-3"
              >
                <span className="text-[13px] font-medium text-neutral-700">
                  {l.name}
                  <br />
                  <span className="text-neutral-500">{l.spec}</span>
                </span>
                <span className="font-display text-base font-bold text-suzuki-red">
                  {l.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-suzuki-ink sm:text-4xl">
            REPUESTOS, LUBRICANTES, LLANTAS Y ACCESORIOS
          </h2>
          <p className="mt-3 text-sm font-semibold tracking-suzuki text-neutral-600">
            COTIZAR UN REPUESTO O ACCESORIO
          </p>
          <p className="mb-4 mt-1 text-[11px] text-neutral-400">
            * Todos los campos con (*) son obligatorios
          </p>

          <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field placeholder="*NOMBRE" />
            <Field placeholder="*APELLIDOS" />
            <Field placeholder="*CELULAR" />
            <Field placeholder="*E-MAIL" type="email" />
            <SelectField placeholder="-- Seleccione una moto" />
            <SelectField placeholder="Año" />
            <SelectField placeholder="*REPUESTO / ACCESORIO" />
            <SelectField placeholder="*DEPARTAMENTO" />
            <SelectField placeholder="*CIUDAD" />
            <SelectField placeholder="*DISTRIBUIDOR" />

            <label className="col-span-full mt-1 flex items-start gap-2 text-[11px] leading-4 text-neutral-500">
              <input type="checkbox" className="mt-0.5 accent-[color:var(--suzuki-red)]" />
              <span>
                Al ingresar tus datos personales, autorizas el tratamiento de los
                mismos conforme a las finalidades establecidas en nuestra{" "}
                <a href="#" className="text-suzuki-red underline">
                  Política De Protección De Datos Personales y Habeas Data
                </a>
              </span>
            </label>

            <div className="col-span-full mt-1 flex w-full max-w-[300px] items-center justify-between border border-neutral-300 bg-white px-3 py-3">
              <label className="flex items-center gap-2 text-[13px] text-neutral-600">
                <input type="checkbox" className="h-6 w-6 accent-[color:var(--suzuki-red)]" />
                No soy un robot
              </label>
              <div className="text-right text-[8px] leading-tight text-neutral-400">
                <div className="mx-auto mb-1 h-6 w-6 rounded-full border-2 border-neutral-300" />
                reCAPTCHA
              </div>
            </div>

            <div className="col-span-full">
              <button
                type="button"
                className="bg-suzuki-ink px-12 py-3 font-display text-sm font-semibold tracking-suzuki text-white transition-colors hover:bg-suzuki-red"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
