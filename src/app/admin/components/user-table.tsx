"use client";

import { motion } from "motion/react";

export function UserTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-rosegold/20">
            <tr>
              <th className="px-6 py-4 text-left font-fredoka font-semibold text-navy">
                Usuario
              </th>
              <th className="px-6 py-4 text-left font-fredoka font-semibold text-navy">
                Email
              </th>
              <th className="px-6 py-4 text-left font-fredoka font-semibold text-navy">
                Rol
              </th>
              <th className="px-6 py-4 text-left font-fredoka font-semibold text-navy">
                Registro
              </th>
              <th className="px-6 py-4 text-left font-fredoka font-semibold text-navy">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user, index) => ( */}
            {/*   <motion.tr */}
            {/*     key={user.id} */}
            {/*     initial={{ opacity: 0, x: -20 }} */}
            {/*     animate={{ opacity: 1, x: 0 }} */}
            {/*     transition={{ delay: index * 0.05 }} */}
            {/*     className="border-b border-rosegold/20 hover:bg-rosegold/5" */}
            {/*   > */}
            {/*     <td className="px-6 py-4"> */}
            {/*       <div className="flex items-center space-x-3"> */}
            {/*         <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center"> */}
            {/*           {user.avatar ? ( */}
            {/*             <img */}
            {/*               src={user.avatar} */}
            {/*               alt={user.name || "Usuario"} */}
            {/*               className="w-full h-full rounded-full object-cover" */}
            {/*             /> */}
            {/*           ) : ( */}
            {/*             <span className="text-ivory font-bold text-sm"> */}
            {/*               {user.name?.charAt(0).toUpperCase() || */}
            {/*                 user.email.charAt(0).toUpperCase()} */}
            {/*             </span> */}
            {/*           )} */}
            {/*         </div> */}
            {/*         <div> */}
            {/*           <p className="font-medium text-navy"> */}
            {/*             {user.name || "Sin nombre"} */}
            {/*           </p> */}
            {/*           {user.id === currentUser.id && ( */}
            {/*             <span className="text-xs text-burgundy font-semibold"> */}
            {/*               (Tú) */}
            {/*             </span> */}
            {/*           )} */}
            {/*         </div> */}
            {/*       </div> */}
            {/*     </td> */}
            {/*     <td className="px-6 py-4 text-navy">{user.email}</td> */}
            {/*     <td className="px-6 py-4"> */}
            {/*       <span */}
            {/*         className={`px-3 py-1 rounded-full text-xs font-semibold ${ */}
            {/*           user.role === "ADMIN" */}
            {/*             ? "bg-burgundy text-ivory" */}
            {/*             : "bg-rosegold text-navy" */}
            {/*         }`} */}
            {/*       > */}
            {/*         {user.role === "ADMIN" ? "Administrador" : "Usuario"} */}
            {/*       </span> */}
            {/*     </td> */}
            {/*     <td className="px-6 py-4 text-navy/70 text-sm"> */}
            {/*       {new Date(user.createdAt).toLocaleDateString("es-ES")} */}
            {/*     </td> */}
            {/*     <td className="px-6 py-4"> */}
            {/*       {user.id !== currentUser.id && ( */}
            {/*         <Form method="post" className="inline"> */}
            {/*           <input type="hidden" name="_action" value="updateRole" /> */}
            {/*           <input type="hidden" name="userId" value={user.id} /> */}
            {/*           <select */}
            {/*             name="role" */}
            {/*             defaultValue={user.role} */}
            {/*             onChange={(e) => e.target.form?.submit()} */}
            {/*             disabled={isSubmitting} */}
            {/*             className="px-3 py-1 border border-rosegold/30 rounded text-sm focus:border-burgundy focus:outline-none disabled:opacity-50" */}
            {/*           > */}
            {/*             <option value="USER">Usuario</option> */}
            {/*             <option value="ADMIN">Admin</option> */}
            {/*           </select> */}
            {/*         </Form> */}
            {/*       )} */}
            {/*     </td> */}
            {/*   </motion.tr> */}
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
