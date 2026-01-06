import React from "react";

export default function CartaoParaMae() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-teal-50 p-6">
			<div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-rose-100 transform transition-all hover:scale-105 duration-300">
				{/* Cabeçalho com Coração */}
				<div className="bg-rose-500 p-4 flex justify-center">
					<span className="text-4xl filter drop-shadow-md">❤️</span>
				</div>

				{/* Conteúdo do Cartão */}
				<div className="p-8 text-center space-y-6">
					<h1 className="text-2xl font-bold text-gray-800 font-serif">Para a Melhor Mãe</h1>

					<p className="text-lg text-gray-600 leading-relaxed italic font-serif">
						"Não importa o tempo que passe ou a distância, você sempre será meu porto seguro e minha maior inspiração. Obrigado por tudo, mãe!"
					</p>

					<div className="pt-4 border-t border-gray-100">
						<p className="text-sm font-medium text-rose-500 tracking-widest uppercase">Com amor, seu filho</p>
					</div>
				</div>
			</div>
		</div>
	);
}
