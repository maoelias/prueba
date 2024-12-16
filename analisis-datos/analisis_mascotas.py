import pandas as pd


data = pd.read_csv('reporte_mascotas.csv')

# Limpiar datos eliminando duplicados y gestionando valores nulos
data = data.drop_duplicates().dropna()

# Análisis 1: Distribución de mascotas por localidad
mascotas_por_localidad = data.groupby('LOCALIDAD').size().reset_index(name='Total Mascotas')

# Análisis 2: Especies más comunes por localidad
especies_por_localidad = data.groupby(['LOCALIDAD', 'ESPECIE']).size().reset_index(name='Cantidad')
especies_top = especies_por_localidad.sort_values(['LOCALIDAD', 'Cantidad'], ascending=[True, False])

# Análisis 3: Razas más comunes por localidad y especie
razas_por_localidad = data.groupby(['LOCALIDAD', 'ESPECIE', 'RAZA']).size().reset_index(name='Cantidad')
razas_top = razas_por_localidad.sort_values(['LOCALIDAD', 'Cantidad'], ascending=[True, False]).groupby(['LOCALIDAD', 'ESPECIE']).head(3)

# Análisis 4: Estratos más representados
estratos_distribucion = data['ESTRATO'].value_counts().reset_index(name='Cantidad')
estratos_distribucion.columns = ['Estrato', 'Cantidad']

# Exportar resultados para análisis adicional
mascotas_por_localidad.to_csv('mascotas_por_localidad.csv', index=False)
especies_top.to_csv('especies_top_por_localidad.csv', index=False)
razas_top.to_csv('razas_top_por_localidad_especie.csv', index=False)
estratos_distribucion.to_csv('distribucion_por_estrato.csv', index=False)

# Visualización básica en consola
print("Distribución de mascotas por localidad:")
print(mascotas_por_localidad)

print("\nEspecies más comunes por localidad:")
print(especies_top)

print("\nRazas más comunes por localidad y especie:")
print(razas_top)

print("\nDistribución por estrato:")
print(estratos_distribucion)
